import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learn JavaScript with p5.js',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        从本书中获得的技能融汇贯通，学习网页应用、可编程机器人或者生成艺术等知识。
      </>
    ),
  },
  {
    title: 'Python自动化脚本-运维人员宝典',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        本书会围绕整个开发过程，从配置和规划到自动化测试和创建不同的命令行工具。
      </>
    ),
  },
  {
    title: '博客文章',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        分享人工智能(Artificial Intelligence)和XR(虚拟现实、增强现实、混合现实)等相关技术的最新动态
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
