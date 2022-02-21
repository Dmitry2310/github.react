import React, { Suspense } from 'react';

export function WithSuspense<WCP>(Component: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </Suspense>)
    }

};