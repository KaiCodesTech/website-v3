export default {
    name: 'banner',
    type: 'document',
    title: 'Banner',
    fields: [
        {
            name: 'featured',
            type: 'reference',
            title: 'Featured Project',
            to: {type: 'project'},
            options: {
                disableNew: true
            }
        }
    ]
}