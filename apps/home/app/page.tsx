import { ActivityLogGraph, People } from '@/_shared'
import { Button } from '@hamsurang/ui'

const sampleData = [
  { startDate: '2024-01-01', endDate: '2024-06-04', contents: '첫 번째 활동 내역' },
  { startDate: '2024-01-01', endDate: '2024-03-31', contents: '두 번째 활동 내역' },
]

export default function Page(): JSX.Element {
  return (
    <main>
      <section className="flex items-center w-full p-5">
        <ActivityLogGraph data={sampleData} />
      </section>
      <Button>Button</Button>
      <People />
    </main>
  )
}
