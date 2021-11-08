## Usage

```shell script
npm run build
npm run start
```

or

```shell script
npm run start:dev
```

you can pass props in the url

```shell script
curl http://localhost:3000/?props={%22size%22:64}
```

you can deploy static assets to CDN, change `$PUBLIC_STATIC_PATH` with CDN path
