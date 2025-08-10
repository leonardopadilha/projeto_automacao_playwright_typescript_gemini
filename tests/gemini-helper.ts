import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()
const GEMINI_KEY = process.env.GEMINI_API_KEY


export async function generatePlaywrightSteps(task: string): Promise<string> {
  const response = await axios.post(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + GEMINI_KEY,
    {
      contents: [{
        parts: [{
          text: `Convert this test case to Playwright Typescript code:\n\n${task} and no explaination required`
        }]
      }]
    }
  )
  return response.data.candidates[0].content.parts[0].text
}