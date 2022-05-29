const monthStringArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const date = new Date();

const posts = [
    {
        name: 'Turning a digital brand into a real world experience1',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },
    {
        name: 'Turning a digital brand into a real world experience1',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },{
        name: 'Turning a digital brand into a real world experience1',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },{
        name: 'Turning a digital brand into a real world experience1',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },{
        name: 'Turning a digital brand into a real world experience1',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },
    {
        name: 'Turning a digital brand into a real world experience1',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },
    {
        name: 'Turning a digital brand into a real world experience2',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },{
        name: 'Turning a digital brand into a real world experience2',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },{
        name: 'Turning a digital brand into a real world experience2',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },{
        name: 'Turning a digital brand into a real world experience2',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },
    {
        name: 'Turning a digital brand into a real world experience2',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },
    {
        name: 'Turning a digital brand into a real world experience2',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },{
        name: 'Turning a digital brand into a real world experience3',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },{
        name: 'Turning a digital brand into a real world experience3',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },{
        name: 'Turning a digital brand into a real world experience3',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },
    {
        name: 'Turning a digital brand into a real world experience3',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },
    {
        name: 'Turning a digital brand into a real world experience3',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },{
        name: 'Turning a digital brand into a real world experience3',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },{
        name: 'Turning a digital brand into a real world experience',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },{
        name: 'Turning a digital brand into a real world experience',
        writtenBy: 'John Doe',
        writtenOn: `${monthStringArray[date.getMonth()]}. ${date.getDate()}, ${date.getFullYear()}`,
        authorLabel: 'CEO PRODUCT DESIGNER',
        imgUrl: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    },
];

export default posts;