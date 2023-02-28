import { query } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'

import { exercises } from './exercises/exercises'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req

  switch (method) {
    case 'GET':
      res.status(200).json(exercises)
      break

    default:
      res.setHeader('Допустимые методы', ['GET'])
      res.status(405).end(`Метод ${method} не допустим`)
  }
}

export default handler
