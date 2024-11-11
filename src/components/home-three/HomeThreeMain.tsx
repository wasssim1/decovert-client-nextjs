import { ALL_BLOGS_DATA } from '@/data/blog-data';

import BlogSection from './BlogSection';
import CategorySlider from './CategorySlider';
import HeroSectionThree from './HeroSectionThree';
import NewsletterSection from './NewsletterSection';
import TrendingProducts from './TrendingProducts';

const HomeThreeMain = () => {
    return (
        <>
            <HeroSectionThree/>
            <CategorySlider/>
            <TrendingProducts/>
            <NewsletterSection/>
            <BlogSection blogsList={ALL_BLOGS_DATA}/>
        </>
    );
};

export default HomeThreeMain;