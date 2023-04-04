import React from 'react';

import DomainIcon from '@mui/icons-material/Domain';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ArticleIcon from '@mui/icons-material/Article';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import ShowChartIcon from '@mui/icons-material/ShowChart';

import ManifestPage from './pages/Manifest/Manifest';

export const routes = [
  {
    label: 'Журналы',
    icon: <LibraryBooksIcon />,
    path: '/',
    children: [
      {
        label: 'Заявки',
        path: '/',
        element: <ManifestPage />
      },
      {
        label: 'Утвержденные заявки',
        path: '/manifest/manifest-verified',
      },
      {
        label: 'Отклоненные заявки',
        path: '/manifest/manifest-rejected',
      },
      {
        label: 'Журнал лимитов',
        path: '/manifest/waste-placing-limits',
      },
      {
        label: 'Журнал рейсов ТС',
        path: '/manifest/routes',
      },
    ],
  },
  {
    label: 'Орнанизация',
    icon: <DomainIcon />,
    path: '/classificatory',
    children: [
      {
        label: 'Организационная структура',
        path: '/classificatory/organization-structure',
      },
      {
        label: 'Источник финансирования',
        path: '/classificatory/financial-sources',
      },
      {
        label: 'Контрагенты',
        path: '/classificatory/counteragents',
      },
    ],
  },
  {
    label: 'Документация',
    icon: <ArticleIcon />,
    path: '/documentation',
    children: [
      {
        label: 'Договоры',
        path: '/documentation/contracts',
      },
      {
        label: 'Типы документов',
        path: '/documentation/document-types',
      },
      {
        label: 'Документы',
        path: '/documentation/documents',
      },
    ],
  },
  {
    label: 'Отходы',
    icon: <DeleteOutlineIcon />,
    path: '/waste',
    children: [
      {
        label: 'Агрегатные состояния',
        path: '/waste/aggregate-states',
      },
      {
        label: 'Агрегатные состояния отходов',
        path: '/waste/waste-aggregate-states',
      },
      {
        label: 'Виды хранения',
        path: '/waste/types-of-storing',
      },
      {
        label: 'Группы операций над отходами',
        path: '/waste/waste-operation-types',
      },
      {
        label: 'Единицы измерения',
        path: '/waste/units',
      },
      {
        label: 'Единицы измерения отходов',
        path: '/waste/waste-unit-measures',
      },
      {
        label: 'Класс опасности',
        path: '/waste/hazard-classes'
      },
      {
        label: 'Лимиты отходов',
        path: '/waste/waste-limits'
      },
      {
        label: 'Место хранения',
        path: '/waste/places-of-storing'
        
      },
      {
        label: 'Образования отходов',
        path: '/waste/waste-producing'
        
      },
      {
        label: 'Операций над отходами',
        path: '/waste/waste-operations'
        
      },
      {
        label: 'Описание работ',
        path: '/waste/description-of-work',
        
      },
      {
        label: 'Отходы',
        path: '/waste/wastes'
        
      },
      {
        label: 'Платежы',
        path: '/waste/color-prices',
        
      },
      {
        label: 'Размещение отходов',
        path: '/waste/waste-storing'
        
      },
      {
        label: 'Типы арендуемого транспорта',
        path: '/waste/rented-vehicle-type'
        
      },
      {
        label: 'Транспортные средства',
        path: '/waste/waste-transporting'
        
      },
      {
        label: 'Уровень опасности отходов',
        path: '/waste/color-classes'
        
      }
    ],
  },
  {
    label: 'Система',
    icon: <SettingsIcon />,
    path: '/system',
    children: [
      {
        label: 'Роли',
        path: '/system/roles'
      },
      {
        label: 'Пользователи',
        path: '/system/users',
      },
      {
        label: 'Представители отходов',
        path: '/system/waste-generator',
      },
      {
        label: 'Пользователи ЦЗ/AFE',
        path: '/system/cost-center'
      },
      {
        label: 'Eco команда',
        path: '/system/eco-team',
      },
      {
        label: 'Права',
        path: '/system/rights',
      },
      {
        label: 'Статусы манифестов',
        path: '/system/manifest-statuses'
      }
    ]
  },
  {
    label: 'Отчеты',
    icon: <ShowChartIcon />,
  },
]