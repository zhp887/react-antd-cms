import loadable from '@loadable/component'

const QfLayout = loadable(()=>import('./layout/QfLayout'))
const QfHeader = loadable(()=>import('./layout/QfHeader'))
const QfSider = loadable(()=>import('./layout/QfSider'))
const QfContent = loadable(()=>import('./layout/QfContent'))

const CateSelect = loadable(()=>import('./good/CateSelect'))
export {
    QfLayout,
    QfSider,
    QfHeader,
    QfContent,
    CateSelect
}