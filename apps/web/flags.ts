import { dedupe, flag } from 'flags/next'
import { OpenFeature, type EvaluationContext } from '@openfeature/server-sdk'
import { createOpenFeatureAdapter } from '@flags-sdk/openfeature'
import { EnvVarProvider } from '@openfeature/env-var-provider'

const identify = dedupe(async ({ headers, cookies }) => {
  // Your own logic to identify the user
  // Identifying the user should rely on reading cookies and headers only, and
  // not make any network requests, as it's important to keep latency low here.
  //   const user = await getUser(headers, cookies)
  const context: EvaluationContext = {
    // targetingKey: user.id,
    targetingKey: '5',
    // .. other properties ..
  }

  return context
})

const openFeatureAdapter = createOpenFeatureAdapter(async () => {
  const provider = new EnvVarProvider()
  await OpenFeature.setProviderAndWait(provider)
  return OpenFeature.getClient()
})

export const exampleFlag = flag<boolean, EvaluationContext>({
  key: 'EXAMPLE_FLAG',
  identify,
  defaultValue: false,
  adapter: openFeatureAdapter.booleanValue(),
})
