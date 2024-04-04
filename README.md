SST / [Ion](https://ion.sst.dev) sample repo to test Cloudfront cache invalidation with Next.js and the app router.

### Steps to reproduce:

1. `pnpm install`
2. `pnpm run deploy`
3. Get [Cloudfront distribution ID](https://console.aws.amazon.com/cloudfront/v4/home) and add to `.env`
4. `pnpm run deploy` again
5. Visit the Cloudfront root URL, note random number. Refresh to see the random number remains cached
6. Visiting `/update` on the Cloudfront URL will trigger revalidatePath('/') and invalidate the CF distribution
7. Visiting the root URL again should then show the new random number
