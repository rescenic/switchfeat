import { Transition, Dialog } from "@headlessui/react";
import { Fragment, type ReactNode, useRef } from "react";
import { classNames } from "../../helpers/classHelper";

export interface ConfirmationDialogProps {
    show: boolean
    setShow: (state: boolean) => void
    onConfirm: () => void
    onCancel: () => void
    title: string
    description: ReactNode
    icon: ReactNode
    accent: "emerald" | "red"
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = (props) => {
    const cancelButtonRef = useRef(null);

    return (
        <Transition.Root show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={props.setShow}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className={classNames(`bg-${props.accent}-100`,
                                                    "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10")}>
                                        {props.icon}
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                            {props.title}
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <div className="text-base text-gray-500">
                                                {props.description}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    className={classNames(`bg-${props.accent}-600 hover:bg-${props.accent}-700 focus:ring-${props.accent}-500`,
                                    "inline-flex w-full justify-center rounded-md border border-transparent",
                                    "px-4 py-2 text-base font-medium text-white shadow-sm",
                                    "focus:outline-none focus:ring-2  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm")}
                                    onClick={props.onConfirm}
                                >
                                    Apply
                                </button>
                                <button
                                    type="button"
                                    className={classNames(`focus:ring-${props.accent}-500`, "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2",
                                    "text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2",
                                    "focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm")}
                                    onClick={props.onCancel}
                                    ref={cancelButtonRef}
                                >
                                    Cancel
                                </button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition.Root>
    );
};
