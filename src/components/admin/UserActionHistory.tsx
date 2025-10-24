'use client'

import { UserAction } from '@/types'

interface UserActionHistoryProps {
  userId: string
  actions: UserAction[]
}

const actionLabels: Record<string, string> = {
  view: 'Consultó',
  edit: 'Editó',
  deactivate: 'Inactivó',
  activate: 'Activó'
}

const actionColors: Record<string, string> = {
  view: 'bg-blue-100 text-blue-800',
  edit: 'bg-yellow-100 text-yellow-800',
  deactivate: 'bg-red-100 text-red-800',
  activate: 'bg-green-100 text-green-800'
}

export default function UserActionHistory({ userId, actions }: UserActionHistoryProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('es-CO', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date)
  }

  if (actions.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">
        <svg className="mx-auto h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <p className="mt-2 text-sm">No hay historial de acciones</p>
      </div>
    )
  }

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {actions.map((action, actionIdx) => (
          <li key={action.id}>
            <div className="relative pb-8">
              {actionIdx !== actions.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${actionColors[action.action]}`}>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium text-gray-900">
                        {action.performedBy}
                      </span>{' '}
                      {actionLabels[action.action]} el usuario
                      {action.details && (
                        <span className="text-gray-600"> - {action.details}</span>
                      )}
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <time dateTime={action.performedAt.toISOString()}>
                      {formatDate(action.performedAt)}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
