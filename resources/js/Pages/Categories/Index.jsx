import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from "@inertiajs/react";

export default function Dashboard(props) {
    const { categories } = usePage().props;

    function destroy(e) {
        if (confirm("Are you sure you want to delete this data?")) {
            Inertia.delete(route("categories.destroy", e.currentTarget.id));
        }
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Category
                </h2>
            }
        >
            <Head title="Categories" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <div className="mb-6 flex items-center justify-between">
                                <Link
                                    className="rounded-md bg-green-500 px-6 py-2 text-white focus:outline-none"
                                    href={route("categories.create")}
                                >
                                    Create Category
                                </Link>
                            </div>

                            <table className="w-full table-fixed">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="w-20 px-4 py-2">No.</th>
                                        <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map(({ id, name }) => (
                                        <tr key={id}>
                                            <td className="border px-4 py-2">
                                                {id}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {name}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                <Link
                                                    tabIndex="1"
                                                    className="rounded bg-blue-500 px-4 py-2 text-sm text-white"
                                                    href={route(
                                                        "categories.edit",
                                                        id
                                                    )}
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={destroy}
                                                    id={id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className="mx-1 rounded bg-red-500 px-4 py-2 text-sm text-white"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}

                                    {categories.length === 0 && (
                                        <tr>
                                            <td
                                                className="border-t px-6 py-4"
                                                colSpan="3"
                                            >
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
