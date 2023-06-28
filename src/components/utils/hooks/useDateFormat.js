import { useMemo } from 'react'

const useDateFormat = () => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options)
        return formattedDate
    }

    return useMemo(() => ({
        formatDate,
    }), [])
}

export default useDateFormat
