import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function PageError() {
    const error = useRouteError()
    console.log('error :>> ', error);
  
    return <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <div>
        <h3 className='h3 text-muted text-uppercase'>Une erreur est survenue</h3>
        <p>
          {error?.error?.toString() ?? error?.toString()}
        </p>
      </div>
    </div>
}