interface HeadingProps {
  label: string
}

const Heading = (props: HeadingProps) => (
    <>
      <p className='text-2xl text-primary md:text-3xl mx-3 mt-4 font-bold'>{props.label}</p>
      <hr style={{ width: 150, height: 8 }} className='mx-3 mt-2 mb-8 bg-secondary' />
    </>
)

export default Heading
