import { ExerciseCard } from '@/components/ExerciseCard/ExerciseCard'

const Workouts = () => (
  <div className='container'>
    {/* @ts-expect-error Server Component */}
    <ExerciseCard />
  </div>
)

export default Workouts
