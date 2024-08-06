import Name from "@/components/nav/name"

const SideBarNav = (): JSX.Element => {
  return (
    <aside className="mt-10 h-screen">
      <div className="px-4">
        <Name />
      </div>
    </aside>
  )
}

export default SideBarNav
