export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            title: 'Displayed',
            name: 'displayed',
            type: 'boolean',
            description: 'Whether or not it is displayed on the home page carousel.'
        },
        {
            title: 'Github URL',
            name: 'url',
            type: 'url',
            description: 'Where the code is stored'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            title: 'Description',
            name: 'desc',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            title: 'Image',
            name: 'bgImage',
            type: 'image'
        }
    ]
}