import { Helmet } from 'react-helmet'

const Seo = ({
    title = 'Fitforge',
    description = 'Fitforge is a gym located at southwest iindia',
    keywords = 'gym, gym aesthetics, gym around my area',
    author = 'Ishola Uthman Eniola'
}) => {

    return(
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta name='author' content={author} />
        </Helmet>
    )
}

export default Seo;