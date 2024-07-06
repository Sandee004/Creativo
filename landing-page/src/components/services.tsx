import Accordion from './accordion';
const Services = () => {
    const items = [
      { title: 'Item 1', content: 'Content for item 1' },
      { title: 'Item 2', content: 'Content for item 2' },
      // ... more items
    ];
    
    return (
        <>
        <p>Our Services</p>
            <Accordion items={items}/>
        </>
    )
}

export default Services;