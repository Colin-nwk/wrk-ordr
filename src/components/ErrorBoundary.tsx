// src/components/ErrorBoundary.tsx
import React, { ErrorInfo, ReactNode } from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorFallback />;
        }

        return this.props.children;
    }
}

function ErrorFallback() {
    const error = useRouteError();
    console.error(error);

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <div>This page doesn't exist!</div>;
        }

        if (error.status === 401) {
            return <div>You aren't authorized to see this</div>;
        }

        if (error.status === 503) {
            return <div>Looks like our API is down</div>;
        }

        if (error.status === 418) {
            return <div>🫖</div>;
        }
    }

    return (
        <div className="error-container">
            <h1>Oops! Something went wrong.</h1>
            <p>We're sorry for the inconvenience. Please try again later.</p>
            <Link to="/">Go back to homepage</Link>
        </div>
    );
}

export default ErrorBoundary;