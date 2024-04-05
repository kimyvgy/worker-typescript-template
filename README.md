# Deprecated: Please use [the official template](https://github.com/cloudflare/workers-sdk/tree/main/templates/worker-typescript) instead.

# 👷 `worker-typescript-template` Hello World

A template for kick starting a Cloudflare worker project.

[`index.ts`](https://github.com/kimyvgy/worker-typescript-template/blob/main/src/index.ts) is the content of the Workers script.


## Usage

To generate using [wrangler](https://github.com/cloudflare/wrangler2)

```
wrangler generate projectname https://github.com/kimyvgy/worker-typescript-template
```

Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

## Development

Start your dev server with following commands:

```sh
yarn install
yarn dev
```

Open up [http://0.0.0.0:8787](http://0.0.0.0:8787) and you should be ready to go!

## Deployment

If you don't already have an account, then [create a cloudflare account here](https://dash.cloudflare.com/sign-up) and after verifying your email address with Cloudflare, go to your dashboard and set up your free custom Cloudflare Workers subdomain.

Once that's done, you should be able to deploy your app:

```sh
npm run deploy
```

Please change KV Namespace's id in `wrangler.toml` before deploying. Create a new KV namespace:

```sh
wrangler kv:namespace create COUNTER --env production
```

```sh
# output example
✨ Success!
Add the following to your configuration file in your kv_namespaces array under [env.production]:
{ binding = "COUNTER", id = "3f04be9cee4445d29a5a331fee98e78b" }
```
