import builder from "xmlbuilder";
import * as path from "path";
import * as fs from "fs";
import { promisify } from "util";

const publicPath = "./public";
const defaultXmlFileName = "BingSiteAuth.xml";

interface PluginOptions {
  userIds: string[];
  xmlFileName?: string;
}

export const onPostBuild = async (_: any, pluginOptions: PluginOptions) => {
  if (pluginOptions && pluginOptions.userIds) {
    const xml = builder
      .create({
        users: pluginOptions.userIds.map(userId => ({
          user: {
            "#text": userId
          }
        }))
      })
      .end();

    const outputPath = path.join(
      publicPath,
      pluginOptions.xmlFileName || defaultXmlFileName
    );

    await promisify(fs.writeFile)(outputPath, xml);
  }
};
