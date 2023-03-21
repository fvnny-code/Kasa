

import Banner from '../../Components/Banner/Banner'
import Collapse from '../../Components/Collapse/Collapse'
import AboutItems from '../../Data/AboutItems.json' // json file created with collapses data

import './About.css'
import '../../Components/Collapse/Collapse.css'

export default function About() {


    return (
        <>
            <div className='about-container'>
                <Banner
                    imageName={"about"}
                />
                <div className='about-informations'>
                    {AboutItems.map((rule, id) => {
                        return <Collapse
                            key={id}
                            title={rule.title}
                            texte={rule.text}
                            size={"l"}
                        />

                    })}


                </div>
            </div>

        </>
    )

}