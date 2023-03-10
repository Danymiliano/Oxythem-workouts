import { ExerciseCard } from '@/components/ExerciseCard/ExerciseCard'
import { defaultCategory } from '@/utils/constants/constants'

const Exercises: React.FC = (): JSX.Element => (
  <div className='container'>
    <ExerciseCard bodyPartCategoryId={defaultCategory} />
  </div>
)

export default Exercises
