import { FC } from 'react'

import { ExerciseCard } from '@/components/ExerciseCard/ExerciseCard'
import { SelectionMenu } from '@/components/SelectionMenu/SelectionMenu'

interface IEquipmentPage {
  params: { equipment: string }
}

const EquipmentPage: FC<IEquipmentPage> = ({ params }: IEquipmentPage) => (
  <>
    <SelectionMenu />
    <div className='container'>
      <ExerciseCard equipment={params.equipment} />
    </div>
  </>
)

export default EquipmentPage
