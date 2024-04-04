/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'sst-ion-nextjs-revalidation-bug',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    };
  },
  async run() {
    new sst.aws.Nextjs('MyWeb', {
      environment: {
        CLOUDFRONT_DISTRIBUTION_ID: process.env.CLOUDFRONT_DISTRIBUTION_ID || '',
      },
    });
  },
});
