import * as React from "react";

interface GatsbyActions {
  pathname: string;
  setHeadComponents: Function;
}

interface PluginOptions {
  userIds: string[];
  xmlFileName: string;
}

export const onRenderBody = (
  { pathname, setHeadComponents }: GatsbyActions,
  pluginOptions: PluginOptions
): void => {
  if (pluginOptions && pluginOptions.userIds && pathname === "/") {
    setHeadComponents(
      pluginOptions.userIds.map(userId => (
        <meta key={userId} name="msvalidate.01" content={userId} />
      ))
    );
  }
};
