import { useState, useMemo, useRef, useCallback } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { GetAllIngredientsRequestData } from '../../services/ingredients/selectors';
import IngredientsContainer from './ingredients-container'

import { TIngredient } from '../../utils/types';

enum Tabs{
    buns = "buns",
    sauces = "sauces",
    fillings = "fillings"
}

interface ITabs{
    tab: Tabs,
    value: number
}

const BurgerIngredients = () => {
    const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.buns);

    const {allIngredients, allIngredientsRequested} = GetAllIngredientsRequestData();

    const bungs = useMemo(() => allIngredients.filter((item:TIngredient) => item.type === 'bun'), [allIngredients]);
    const sauces = useMemo(() => allIngredients.filter((item: TIngredient) => item.type === 'sauce'), [allIngredients]);
    const fillings = useMemo(() => allIngredients.filter((item: TIngredient) => item.type === 'main'), [allIngredients]);

    const tabRef = useRef<HTMLDivElement>(null);
    const bunsContainerRef = useRef<HTMLDivElement>(null);
    const saucesContainerRef = useRef<HTMLDivElement>(null);
    const fillingsContainerRef = useRef<HTMLDivElement>(null);

    const switchTab = () => {
        if(!(tabRef.current && bunsContainerRef.current && saucesContainerRef.current && fillingsContainerRef.current))
            return;

        const tabBottom = tabRef.current?.getBoundingClientRect().bottom;

        const bunsTop : number = bunsContainerRef.current.getBoundingClientRect().top;
        const saucesCoordinatesTop : number = saucesContainerRef.current.getBoundingClientRect().top;
        const fillingsCoordinatesTop : number = fillingsContainerRef.current.getBoundingClientRect().top;
    
        const allSections: Array<ITabs> = [{tab: Tabs.buns, value: Math.abs(bunsTop - tabBottom)}, 
            {tab: Tabs.sauces, value: Math.abs(saucesCoordinatesTop - tabBottom)}, 
            {tab: Tabs.fillings, value: Math.abs(fillingsCoordinatesTop - tabBottom)}];

        const currentSection : ITabs = allSections.reduce((a: ITabs, b: ITabs) => a.value < b.value ? a : b)


        setCurrentTab(currentSection.tab);
    }

    const onClickTab = useCallback((value: string) => {
        if(bunsContainerRef.current && saucesContainerRef.current && fillingsContainerRef.current){
            switch(value){
                case "buns":
                    bunsContainerRef?.current.scrollIntoView({behavior: 'smooth'});
                    break;
                case "sauces":
                    saucesContainerRef?.current.scrollIntoView({behavior: 'smooth'});
                    break;
                case "fillings":
                    fillingsContainerRef?.current.scrollIntoView({behavior: 'smooth'});
                    break;
                default:
                    break;
            }
        }
    }, [])

    return (
        <section className={styles.mainIngredientsSection}>
            {allIngredientsRequested && (
                <div className={styles.mainContainer}>
                    <h1>Соберите бургер</h1>

                    <div>
                        <div className={styles.tabs} ref={tabRef}>
                            <Tab value={Tabs.buns} active={currentTab === Tabs.buns} onClick={onClickTab}>Булки</Tab>
                            <Tab value={Tabs.sauces} active={currentTab === Tabs.sauces} onClick={onClickTab}>Соусы</Tab>
                            <Tab value={Tabs.fillings} active={currentTab ===  Tabs.fillings} onClick={onClickTab}>Начинки</Tab>
                        </div>
                        <div className={`${styles.scroller} custom-scroll`} onScroll={switchTab}>
                            <IngredientsContainer ref={bunsContainerRef} name="Булки" data={bungs} />
                            <IngredientsContainer ref={saucesContainerRef} name="Соусы" data={sauces} />
                            <IngredientsContainer ref={fillingsContainerRef} name="Начинки" data={fillings} />
                        </div>
                    </div>
                    
                </div>
            )}
        </section>
    );
}

export default BurgerIngredients;