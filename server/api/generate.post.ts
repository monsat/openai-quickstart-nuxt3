import { Configuration, OpenAIApi } from 'openai'

const generatePrompt = (animal: string) => `
Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${animal}
Names:
`.trim()


export default defineEventHandler(async (event) => {
  const { openaiApiKey: apiKey } = useRuntimeConfig()
  const { animal = '' } = await readBody(event)

  if (!animal) {
    return event.res.end('No animal provided')
  }

  const configuration = new Configuration({ apiKey })
  const openai = new OpenAIApi(configuration)

  // OpenAI config
  const model = 'text-davinci-002'
  const prompt = generatePrompt(animal)
  const temperature = 0.6

  const completion = await openai.createCompletion({
    model,
    prompt,
    temperature,
  })

  const result = completion.data.choices[0].text || ''

  return {
    result,
  }
})
