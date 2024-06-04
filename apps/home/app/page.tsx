import { ActivityLogGraph, People } from '@/_shared'
import { Button } from '@hamsurang/ui'

const sampleData = [
  { date: '2024-01-01', contents: '첫 번째 활동 내역' },
  { date: '2024-01-02', contents: '두 번째 활동 내역' },
  { date: '2024-01-03', contents: '세 번째 활동 내역' },
  { date: '2024-01-07', contents: '세 번째 활동 내역' },
  { date: '2024-01-15', contents: '네 번째 활동 내역 \n 모르겠어!' },
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
