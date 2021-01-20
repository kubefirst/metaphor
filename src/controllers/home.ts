import { Request, Response } from "express";

/**
 * Home page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {

  res.render("home", {
        title: "metaphor",
        body: "SOMETHING NEW",
        foo: "bar",
        appName: "metaphor",
        packageVersion: process.env.PACKAGE_VERSION,
        dockerTag: process.env.DOCKER_TAG,
        secretOne: process.env.SECRET_ONE,
        secretTwo: process.env.SECRET_TWO,
        configOne: process.env.CONFIG_ONE,
        configTwo: process.env.CONFIG_TWO,
    });
};

/**
 * Home page.
 * @route GET /healthz
 */
export const healthz = (req: Request, res: Response) => {

  res.status(200).send({
    status:
      "ok, but we should probably come up with something better eventually",
  });

};
