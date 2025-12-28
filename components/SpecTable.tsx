export default function SpecTable() {
  return (
    <div className="border border-ink/10 bg-paper/50">
      <div className="px-6 py-4 border-b border-ink/10 bg-ink/5">
        <h3 className="font-serif text-lg font-semibold">Specifications</h3>
      </div>
      <dl className="divide-y divide-ink/10">
        <div className="px-6 py-4 flex justify-between">
          <dt className="small-caps text-ink/60">Case Size</dt>
          <dd className="text-ink/80">Varies by build</dd>
        </div>
        <div className="px-6 py-4 flex justify-between">
          <dt className="small-caps text-ink/60">Movement</dt>
          <dd className="text-ink/80">Varies by build</dd>
        </div>
        <div className="px-6 py-4 flex justify-between">
          <dt className="small-caps text-ink/60">Water Resistance</dt>
          <dd className="text-ink/80">Varies by build</dd>
        </div>
        <div className="px-6 py-4 flex justify-between">
          <dt className="small-caps text-ink/60">Strap</dt>
          <dd className="text-ink/80">Varies by build</dd>
        </div>
      </dl>
    </div>
  )
}

