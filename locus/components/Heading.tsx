interface HeadingProps {
  label: string
}

const Heading = (props: HeadingProps) => (
    <>
      <p className='text-lg text-primary md:text-xl mx-3 mt-4 font-bold'>{props.label}</p>
      <hr style={{ width: 100, height: 6 }} className='mx-3 mt-2 mb-8 bg-secondary' />
    </>
)

export default Heading
