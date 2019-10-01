describe("gatsby-plugin-verify-bing: gatsby-node", () => {
  it("generates a valid XML file, given valid options", async () => {
    const mockedWriteFile = jest.fn((name, contents, callback) => {
      callback();
    });

    jest.mock("fs", () => ({
      writeFile: mockedWriteFile
    }));

    const { onPostBuild } = await import("../gatsby-node");

    await onPostBuild(
      {},
      { userIds: ["testTESTtest"], xmlFileName: "BingSiteAuth.xml" }
    );

    expect(mockedWriteFile).toHaveBeenCalledTimes(1);
    expect(mockedWriteFile.mock.calls[0][0]).toBe("public/BingSiteAuth.xml");
    expect(mockedWriteFile.mock.calls[0][1]).toMatchInlineSnapshot(`
      <?xml version="1.0"?>
      <users>
          <user>
              testTESTtest
          </user>
      </users>
    `);
  });
});
