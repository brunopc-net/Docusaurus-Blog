import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import BuyMeCoffee from '@site/src/components/BuyMeCoffee';

import styles from './index.module.css';

const resume = require('@site/static/data/resume.json');

const FeatureList = [
  {
    title: 'Discover my work experience',
    link: '/docs/category/experiences',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: 'I like to work for nice people'
  },
  {
    title: 'Read my blog',
    link: '/blog/',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: 'I write sometimes, especially when my coffee is too strong 💀'
  },
  {
    title: 'See my sideline projets',
    link: '/docs/category/projects',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: 'I like to optimize my skills when I have the time'
  },
];

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          Bruno Pettersen-Coulombe
        </h1>
        <h2 className="hero__subtitle">
          <Link to="/docs/about/#skills" >Full-Stack Developer</Link> 👨‍💻 <span/>
          <Link to="/docs/education/software-engineering-bachelor/">B.Eng</Link> ⚙️ <span/>
          <Link to="/docs/category/experiences/">{resume.basics.experience} years of experience</Link>
        </h2>
        <h2 className="hero__subtitle">
          <Link to="/docs/experiences/devsecops-developer-at-rona/">DevOps</Link> & <span/> 
          <Link to="/docs/experiences/sdet-tech-lead-at-national-bank-of-canada/">QA</Link> expert 🧑‍🏫
        </h2>
        <h2 className="hero__subtitle">
          <Link to="/docs/certifications/aws_cloud_practitionner/">AWS</Link>, <span/>
          <Link to="/docs/certifications/azure_fundamentals/">Azure</Link> & <span/>
          <Link to="/docs/certifications/terraform_associate/">Terraform</Link> certified ✅
        </h2>
        <h2 className="hero__subtitle">Racing geek 🚴🏎️</h2>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://brunopc-net.github.io/Reactsume">
            See my résumé 📃
          </Link>
        </div>
        <BuyMeCoffee />
      </div>
    </header>
  );
}

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        {link ? (
          <h3><Link href={link}>{title}</Link></h3>
        ) : (
          <h3>{title}</h3>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title={''}
      description="Welcome to brunopc.net, Bruno PC cyber-space! Learn more about Bruno Pettersen-Coulombe here">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}