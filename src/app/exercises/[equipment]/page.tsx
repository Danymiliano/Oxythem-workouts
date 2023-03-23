import { FC } from 'react'

import { ExerciseCard } from '@/components/ExerciseCard/ExerciseCard'
import { SelectionMenu } from '@/components/SelectionMenu/SelectionMenu'

interface IProps {
  params: { equipment: string }
}

const EquipmentPage: FC<IProps> = ({ params }: IProps) => (
  <>
    <SelectionMenu />
    <div className='container'>
      <ExerciseCard equipment={params.equipment} />
    </div>
  </>
)

export default EquipmentPage
