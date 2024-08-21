import style from "./AboutContent.module.scss"

export const AboutContent = () => {
    return (
        <>
        <figure className={style.aboutStyle}>
            <img src="src/assets/images/Cash.png" alt="" />
        <figcaption>
            <header>
            <h2>INTET PROBLEM</h2>
            </header>
                <p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.</p>
                <p>Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
        </figcaption>
        </figure>
        </>
    )
}