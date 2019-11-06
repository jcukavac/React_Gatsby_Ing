/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
export function onRenderBody(
    { setHeadComponents, setPostBodyComponents }
) {
    setHeadComponents([
        <script
            key="abc"
            type="text/javascript"
            src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />,
    ]);

    {
        setPostBodyComponents([
            <script>
                if (window.netlifyIdentity) {
                    window.netlifyIdentity.on("init", user => {
                        if (!user) {
                            window.netlifyIdentity.on("login", () => {
                                document.location.href = "/admin/";
                            });
                        }
                    })
              }
            </script>
        ]);
    }
}