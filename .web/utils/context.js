import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}, "slug": ""}, "state.state": {"get_lm_url": "", "get_manage_sub_url": "", "get_renew_date": "", "get_user_email": "", "get_user_name": "", "id_token": null, "manage_sub_url": null, "name": null, "plan": false, "refresh_token": null, "renews_at": null, "sent_reset_email": false, "show_spinner": true, "signed_in": false, "signed_out": true, "sub_id": null, "user_email": null}, "state.state.auth_state": {"confirm_password_field": "", "email_field": "", "error_message": "", "password_field": "", "show_error": false}, "state.state.post_state": {"content": [], "current_text": "", "date": "", "page_id": "", "paragraphs": [], "post_slug": "No slug", "subtitle": "", "title": ""}, "state.state.dash_state": {"alert_heading": "", "alert_message": "", "cancel_error_message": "", "close": [42853.17, 42842.38, 41796.27, 42511.97, 43154.95, 42742.65, 41262.06, 41618.41, 41665.59, 41545.79, 39507.37, 39845.55, 40077.07, 39933.81, 41816.87, 42120.05, 42035.59, 43288.25, 42952.61, 42582.61, 43075.77, 43185.86, 42992.25, 42583.58, 42658.67, 43084.67, 44318.22, 45301.57, 47147.2, 47771.28, 48293.92, 47870.78], "close_button_message": "", "confirmed_cancel": false, "curr_price": "$47870.78", "data": {"columns": ["Date", "Open", "High", "Low", "Close", "Volume"], "data": [["2024/01/12", 46354.79, 46498.14, 41903.77, 42853.17, 43332698900], ["2024/01/13", 42799.45, 43234.66, 42464.14, 42842.38, 20601860469], ["2024/01/14", 42842.26, 43065.6, 41724.61, 41796.27, 17521429522], ["2024/01/15", 41715.07, 43319.72, 41705.42, 42511.97, 22320220558], ["2024/01/16", 42499.34, 43566.27, 42086.0, 43154.95, 24062872740], ["2024/01/17", 43132.1, 43189.89, 42189.31, 42742.65, 20851232595], ["2024/01/18", 42742.31, 42876.35, 40631.17, 41262.06, 25218357242], ["2024/01/19", 41278.46, 42134.16, 40297.46, 41618.41, 25752407154], ["2024/01/20", 41624.59, 41877.89, 41446.82, 41665.59, 11586690904], ["2024/01/21", 41671.49, 41855.37, 41497.01, 41545.79, 9344043642], ["2024/01/22", 41553.65, 41651.21, 39450.12, 39507.37, 31338708143], ["2024/01/23", 39518.71, 40127.35, 38521.89, 39845.55, 29244553045], ["2024/01/24", 39877.59, 40483.79, 39508.8, 40077.07, 22359526178], ["2024/01/25", 40075.55, 40254.48, 39545.66, 39933.81, 18491782013], ["2024/01/26", 39936.82, 42209.39, 39825.69, 41816.87, 25598119893], ["2024/01/27", 41815.62, 42195.63, 41431.28, 42120.05, 11422941934], ["2024/01/28", 42126.12, 42797.18, 41696.91, 42035.59, 16858971687], ["2024/01/29", 42030.91, 43305.87, 41818.33, 43288.25, 20668476578], ["2024/01/30", 43300.23, 43838.95, 42711.37, 42952.61, 23842814518], ["2024/01/31", 42946.25, 43717.41, 42298.95, 42582.61, 24673628793], ["2024/02/01", 42569.76, 43243.17, 41879.19, 43075.77, 21423953779], ["2024/02/02", 43077.64, 43422.49, 42584.34, 43185.86, 18603843039], ["2024/02/03", 43184.96, 43359.94, 42890.81, 42992.25, 11169245236], ["2024/02/04", 42994.94, 43097.64, 42374.83, 42583.58, 14802225490], ["2024/02/05", 42577.62, 43494.25, 42264.82, 42658.67, 18715487317], ["2024/02/06", 42657.39, 43344.15, 42529.02, 43084.67, 16798476726], ["2024/02/07", 43090.02, 44341.95, 42775.96, 44318.22, 21126587775], ["2024/02/08", 44332.12, 45575.84, 44332.12, 45301.57, 26154524080], ["2024/02/09", 45297.38, 48152.5, 45260.82, 47147.2, 39316770844], ["2024/02/10", 47153.53, 48146.17, 46905.32, 47771.28, 16398681570], ["2024/02/11", 47768.97, 48535.94, 47617.41, 48293.92, 19315867136], ["2024/02/12", 48296.39, 48707.34, 47774.38, 47870.78, 20215791616]]}, "data_len": 32, "delta": "11.71", "email_error_message": "", "increase": true, "name_field": "", "password_field": "", "profile_error_message": "", "show_alert": false, "show_cancel_error": false, "show_email_error": false, "show_profile_error": false}, "state.state.index_state": {"enterprise_mo": "$420", "enterprise_yr": "$4200", "premium_mo": "$69", "premium_yr": "$690", "pro_mo": "$9", "pro_yr": "$90", "yearly_pricing": false}, "state.state.blog_state": {"posts": []}}

export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__state: createContext(null),
  state__state__auth_state: createContext(null),
  state__state__post_state: createContext(null),
  state__state__dash_state: createContext(null),
  state__state__index_state: createContext(null),
  state__state__blog_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const onLoadInternalEvent = () => [Event('state.on_load_internal')]

export const initialEvents = () => [
    Event('state.hydrate', hydrateClientStorage(clientStorage)),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__state, dispatch_state__state] = useReducer(applyDelta, initialState["state.state"])
  const [state__state__auth_state, dispatch_state__state__auth_state] = useReducer(applyDelta, initialState["state.state.auth_state"])
  const [state__state__post_state, dispatch_state__state__post_state] = useReducer(applyDelta, initialState["state.state.post_state"])
  const [state__state__dash_state, dispatch_state__state__dash_state] = useReducer(applyDelta, initialState["state.state.dash_state"])
  const [state__state__index_state, dispatch_state__state__index_state] = useReducer(applyDelta, initialState["state.state.index_state"])
  const [state__state__blog_state, dispatch_state__state__blog_state] = useReducer(applyDelta, initialState["state.state.blog_state"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.state": dispatch_state__state,
      "state.state.auth_state": dispatch_state__state__auth_state,
      "state.state.post_state": dispatch_state__state__post_state,
      "state.state.dash_state": dispatch_state__state__dash_state,
      "state.state.index_state": dispatch_state__state__index_state,
      "state.state.blog_state": dispatch_state__state__blog_state,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__state.Provider value={ state__state }>
    <StateContexts.state__state__auth_state.Provider value={ state__state__auth_state }>
    <StateContexts.state__state__post_state.Provider value={ state__state__post_state }>
    <StateContexts.state__state__dash_state.Provider value={ state__state__dash_state }>
    <StateContexts.state__state__index_state.Provider value={ state__state__index_state }>
    <StateContexts.state__state__blog_state.Provider value={ state__state__blog_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__state__blog_state.Provider>
    </StateContexts.state__state__index_state.Provider>
    </StateContexts.state__state__dash_state.Provider>
    </StateContexts.state__state__post_state.Provider>
    </StateContexts.state__state__auth_state.Provider>
    </StateContexts.state__state.Provider>
    </StateContexts.state.Provider>
  )
}