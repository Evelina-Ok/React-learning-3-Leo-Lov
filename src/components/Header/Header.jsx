import style from './Header.module.scss'

export const Header = ({}) => {
    return (        
    <>
    
        <header className={style.headerStyle}>
            <hgroup className={style.hgroupStyle}>
                <h2>
                <span>Leo</span>
               -Lov</h2>
            </hgroup>
            <p>Lov og ret kan være et plaster! Hvis du ellers har knaster!</p>
        </header>
    </>
    )
}
