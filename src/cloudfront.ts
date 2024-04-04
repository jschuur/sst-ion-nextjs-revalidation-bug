import { CloudFrontClient, CreateInvalidationCommand } from '@aws-sdk/client-cloudfront';

const cloudFront = new CloudFrontClient({});

export async function invalidateCloudFrontPaths(paths: string[]) {
  if (!process.env.CLOUDFRONT_DISTRIBUTION_ID) {
    throw 'CLOUDFRONT_DISTRIBUTION_ID not set. Skipping invalidation.';
  }

  await cloudFront.send(
    new CreateInvalidationCommand({
      DistributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID || '',
      InvalidationBatch: {
        CallerReference: `${Date.now()}`,
        Paths: {
          Quantity: paths.length,
          Items: paths,
        },
      },
    })
  );
}
