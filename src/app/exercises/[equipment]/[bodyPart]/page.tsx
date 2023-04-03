import { FC } from 'react'

import { ExerciseCard } from '@/components/ExerciseCard/ExerciseCard'
import { SelectionMenu } from '@/components/SelectionMenu/SelectionMenu'

interface IProps {
  params: { bodyPart?: string; equipment?: string }
}

const BodyPartPage: FC<IProps> = ({ params }: IProps) => (
  <>
    <SelectionMenu bodyPart={params.bodyPart} />
    <div className='container'>
      <ExerciseCard equipment={params.equipment} />
    </div>
  </>
)

export default BodyPartPage
