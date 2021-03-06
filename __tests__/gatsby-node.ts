describe("gatsby-plugin-verify-bing: gatsby-node", () => {
  describe("generates a valid XML file", () => {
    const mockedWriteFile = jest.fn((name, contents, callback) => {
      callback();
    });

    beforeEach(() => {
      jest.mock("fs", () => ({
        writeFile: mockedWriteFile,
      }));
    });

    afterEach(() => {
      mockedWriteFile.mockClear();
    });

    it("given all options", async () => {
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

    it("given only required options", async () => {
      const { onPostBuild } = await import("../gatsby-node");

      await onPostBuild({}, { userIds: ["testTESTtest"] });

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
});
