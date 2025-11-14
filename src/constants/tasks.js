const TASKS = [
    {
        id: 1,
        title: 'HTML e CSS',
        description: '',
        time: 'morning',
        status: 'done'
    },
    {
        id: 2,
        title: 'JavaScript',
        description: '',
        time: 'morning',
        status: 'done'
    },
    {
        id: 3,
        title: 'Next JSx',
        description: '',
        time: 'afternoon',
        status: 'in_progress'
    },
    {
        id: 4,
        title: 'Next TSX',
        description: '',
        time: 'afternoon',
        status: 'in_progress'
    },
    {
        id: 5,
        title: 'API Rest com NodeJS',
        description: '',
        time: 'night',
        status: 'not_started'
    },
    {
        id: 6,
        title: 'API Rest com Java Spring',
        description: '',
        time: 'night',
        status: 'not_started'
    },
]
/**
 *  pensar em melhorias
 */

/**
    const retorno = {
        morning: TASKS.filter(task => task.time === 'morning'),
        afternoon: TASKS.filter(task => task.time === 'afternoon'),
        moon: TASKS.filter(task => task.time === 'moon'),
    }
*/
export default TASKS;