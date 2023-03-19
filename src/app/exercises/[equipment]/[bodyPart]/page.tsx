import { FC } from 'react'

import { ExerciseCard } from '@/components/ExerciseCard/ExerciseCard'
import { SelectionMenu } from '@/components/SelectionMenu/SelectionMenu'

interface IBodyPartPage {
  params: { bodyPart: string | undefined; equipment: string | undefined }
}

const BodyPartPage: FC<IBodyPartPage> = ({ params }: IBodyPartPage) => (
  <>
    <SelectionMenu bodyPart={params.bodyPart} />
    <div className='container'>
      <ExerciseCard equipment={params.equipment} />
    </div>
  </>
)

export default BodyPartPage
