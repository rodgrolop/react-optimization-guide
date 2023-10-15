import { ReactElement, useEffect, useState } from 'react'
import { PageContainer, SocialGrid } from '@components'
import ReactMarkdown from 'react-markdown'
import { Helmet } from 'react-helmet-async'
import { aboutContentES, aboutContentEN } from './content'
import { sanitizeLanguage } from '@utils'
import { styles } from './styles'

import { useTranslation } from 'react-i18next'

const About = (): ReactElement => {
    const { i18n } = useTranslation()
    const [translatedContent, setTranslatedContent] = useState<string>('')

    useEffect(() => {
        setTranslatedContent(
            sanitizeLanguage() === 'es' ? aboutContentES : aboutContentEN
        )
    }, [i18n.language])

    return (
        <PageContainer>
            <Helmet>
                <title>
                    👨‍💻 About me
                </title>
            </Helmet>
            <div style={styles.markdownContent}>
                <ReactMarkdown children={translatedContent} />
            </div>
            <SocialGrid />
        </PageContainer>
    )
}

export default About
