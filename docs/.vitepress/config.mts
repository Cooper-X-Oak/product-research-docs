import { defineConfig } from 'vitepress'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.GITHUB_PAGES === 'true' && repositoryName
  ? `/${repositoryName}/`
  : '/'

export default defineConfig({
  title: 'AI CMO / Marketing Agent 研究报告',
  description: '逐点全网调研、证据台账与 MVP 决策结论',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  srcExclude: [
    'context/**',
    'research/overview.md',
    'research/final_report.md',
    'research/appendix/**',
    'research/mvp/**'
  ],
  head: [
    ['meta', { name: 'theme-color', content: '#f7f5ef' }]
  ],
  themeConfig: {
    logo: undefined,
    siteTitle: '研究报告',
    nav: [
      { text: '报告首页', link: '/' },
      { text: '研究总览', link: '/research/' },
      { text: 'MVP 结论', link: '/research/07_opportunity_decision/03_recommended_mvp' },
      { text: '风险边界', link: '/research/07_opportunity_decision/04_risks_and_unknowns' },
      { text: '证据台账', link: '/research/evidence/source_log' }
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '首页', link: '/' },
          { text: '逐点调研总览', link: '/research/' }
        ]
      },
      {
        text: '调研方法',
        items: [
          { text: '调研设计', link: '/research/00_methodology/research_design' },
          { text: 'agent-reach 渠道体检', link: '/research/00_methodology/agent_reach_doctor' },
          { text: '来源分级', link: '/research/00_methodology/source_grading' },
          { text: '查询日志', link: '/research/00_methodology/query_log' }
        ]
      },
      {
        text: '类目边界',
        items: [
          { text: 'AI CMO 定义', link: '/research/01_category_definition/01_ai_cmo_definition' },
          { text: 'Marketing Agent 定义', link: '/research/01_category_definition/02_marketing_agent_definition' },
          { text: 'GEO/SEO/内容/社媒/B2B 边界', link: '/research/01_category_definition/03_geo_seo_content_social_b2b_boundaries' }
        ]
      },
      {
        text: '海外标杆',
        items: [
          { text: 'Okara', link: '/research/02_overseas_benchmarks/01_okara' },
          { text: 'Jasper', link: '/research/02_overseas_benchmarks/02_jasper' },
          { text: 'Copy.ai', link: '/research/02_overseas_benchmarks/03_copy_ai' },
          { text: 'Clay', link: '/research/02_overseas_benchmarks/04_clay' },
          { text: 'Apollo', link: '/research/02_overseas_benchmarks/05_apollo' },
          { text: 'Semrush / Surfer', link: '/research/02_overseas_benchmarks/06_semrush_surfer' },
          { text: '海外标杆综合结论', link: '/research/02_overseas_benchmarks/07_benchmark_conclusion' }
        ]
      },
      {
        text: '中国市场地图',
        items: [
          { text: '企业级 MarTech', link: '/research/03_china_market_map/01_enterprise_martech' },
          { text: 'SEO/GEO 内容工具', link: '/research/03_china_market_map/02_seo_content_tools' },
          { text: '社媒数据 / 舆情监听', link: '/research/03_china_market_map/03_social_data_tools' },
          { text: '本地商家 / 本地生活 SaaS', link: '/research/03_china_market_map/04_local_merchant_saas' }
        ]
      },
      {
        text: '机会决策',
        items: [
          { text: '决策标准', link: '/research/07_opportunity_decision/01_decision_criteria' },
          { text: '决策矩阵', link: '/research/07_opportunity_decision/02_decision_matrix' },
          { text: '推荐 MVP', link: '/research/07_opportunity_decision/03_recommended_mvp' },
          { text: '风险和未知数', link: '/research/07_opportunity_decision/04_risks_and_unknowns' }
        ]
      },
      {
        text: '核心证据',
        items: [
          { text: '外贸 B2B 线索研究', link: '/research/04_customer_scenarios/01_b2b_export_lead_research' },
          { text: '本地商家内容运营', link: '/research/04_customer_scenarios/02_local_merchant_content_operation' },
          { text: 'B2B 工具价格', link: '/research/05_pricing_willingness/01_b2b_tools_pricing' },
          { text: '海关数据价格', link: '/research/05_pricing_willingness/02_customs_data_pricing' },
          { text: 'agent-reach 可用性', link: '/research/06_technical_feasibility/01_agent_reach_channel_reliability' }
        ]
      },
      {
        text: 'MVP 计划',
        items: [
          { text: 'MVP 计划目录', link: '/research/08_mvp_plan/' }
        ]
      },
      {
        text: '最终综合',
        items: [
          { text: '最终综合目录', link: '/research/09_synthesis/' }
        ]
      },
      {
        text: '证据台账',
        items: [
          { text: '来源总台账', link: '/research/evidence/source_log' },
          { text: '命令总台账', link: '/research/evidence/command_log' },
          { text: '失败渠道', link: '/research/evidence/failed_channels' },
          { text: '来源质量矩阵', link: '/research/evidence/source_quality_matrix' },
          { text: '术语表', link: '/research/evidence/glossary' }
        ]
      }
    ],
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    }
  }
})




