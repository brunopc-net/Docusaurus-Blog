---
sidebar_position: 1
---

import MarkdownLink from '@site/src/components/link/MarkdownLink';
import SkillTable from '@site/src/components/SkillTable';
import resume from '@site/static/data/resume.json';
import Link from '@docusaurus/Link';

# About me

I live in Montreal, Canada. [I am a scientific mind in an athlete body](https://passionpvss.blogspot.com/2017/06/scientist-mind-athlete-body.html).

My <Link to="/docs/category/experiences/">{resume.basics.experience} years of work experience has been very diverse so far</Link>, as I did development, both in backend/frontend, software and web. I also worked in multiples [DevOps](https://www.atlassian.com/devops) transformations([1](/docs/experiences/devops_developer_at_societe_generale/), [2](/docs/experiences/devsecops-developer-at-rona/)) and as a [SDET](https://www.softwaretestinghelp.com/what-is-sdet/)([1](/docs/experiences/sdet-tech-lead-at-national-bank-of-canada/)). In my last roles, I had my first experiences as [Principal Developer](/docs/experiences/principal-backend-developer-at-rona/) and [Tech lead](/docs/experiences/sdet-tech-lead-at-national-bank-of-canada/).

## Résumé

<MarkdownLink button
  to='https://brunopc-net.github.io/Reactsume/'
  text='Online 📃'
/>

<MarkdownLink button
  to='https://brunopc-net.github.io/Reactsume/resume-en.pdf'
  text='PDF (en) 📃'
/>

<MarkdownLink button
  to='https://brunopc-net.github.io/Reactsume/resume-fr.pdf'
  text='PDF (fr) 📃'
/>

<MarkdownLink button
  to='/data/resume.json'
  text='JSON 📃'
/>

## Skills

<SkillTable resume={resume} />

## Particularities

[I pursued an entrepreneurship minor](/docs/education/entrepreneurship-minor) and went on to found three distinct companies. Throughout my journey, I have directly interacted with clients on multiple occasions.

These experiences have given me a perspective that often eludes individuals with great technical skills. While using the latest available technologies is enticing, it becomes inconsequential if the project ultimately leads to a net loss in profitability. Sure, staying updated with the latest trends can be a good marketing argument. However, the true objective should always be speed and efficiency of work, not just the allure of new technology. There are instances when adopting the latest tools might not align with the project's context. A skilled Software Engineer should possess the ability to precisely tailor their work to best suit the situation.

My keen business acumen, efficient work ethic, and pragmatic approach are what set me apart. I firmly believe that IT holds value only when it contributes to efficiency gains for individuals and organizations alike.

## Interests

I am an accomplished athlete. I've been Speed skating for more then 20 years. [I'm a world recordman](https://www-rollerenligne-com.translate.goog/rencontre-avec-bruno-pettersen-coulombe-vainqueur-solo-des-24h-rollers-de-montreal-canada/?_x_tr_sl=fr&_x_tr_tl=en&_x_tr_hl=fr&_x_tr_pto=wapp), as I traveled the most distance by skating within 24 hours. My passion has also made me a [published author on the subject](../static/files/Preview_Le_patinage_de_vitesse_courte_piste_2.pdf).

As for now, my current hobbies include kart and bike racing.

<div className="row">
  <div className="sideBySide">
    <Link to="https://www.facebook.com/bruno.dorais.9">
      <img
        alt="Bruno Pettersen-Coulombe karting"
        src={require('@site/static/img/Bruno-PC-karting.webp').default}
        width="485"
        heigth="333"
        srcSet={require('@site/static/img/Bruno-PC-karting-small.webp').default+" 245w,"+require('@site/static/img/Bruno-PC-karting.webp').default+" 485w"}
        sizes="(max-width: 510px) 245px, 485px"
        loading="lazy"
      />
    </Link>
  </div>
  <div className="sideBySide">
    <img
      alt="Bruno Pettersen-Coulombe cycling"
      src={require('@site/static/img/Bruno-PC-cycling.webp').default}
      width="485"
      heigth="333"
      srcSet={require('@site/static/img/Bruno-PC-cycling-small.webp').default+" 245w,"+require('@site/static/img/Bruno-PC-cycling.webp').default+" 485w"}
      sizes="(max-width: 510px) 245px, 485px"
      loading="lazy"
    />
  </div>
</div>

Other then that, I love, you guessed it… ☕coffee.

If you just rolled your eyes, I won't blame you.