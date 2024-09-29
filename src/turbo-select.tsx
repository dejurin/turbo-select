/**
 * TurboSelect Component
 *
 * @file TurboSelect.tsx
 * @module TurboSelect
 * @author https://github.com/dejurin
 * @see {@link https://github.com/dejurin/turbo-select}
 *
 *
 * @version 0.4.0
 *
 * @license
 * MIT License
 */

import { Fragment, h } from "preact";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";

import { StyleTransition } from "preact-transitioning";
import clsx from "clsx";
import cssText from "bundle-text:./styles.css";
import register from "preact-custom-element";
import { useClickOutside } from "./hooks/click";

/**
 * Injects the given CSS string into the page by creating a new style element
 * and appending it to the head of the document.
 *
 * @param {string} css - The CSS text to inject.
 *
 * @returns {HTMLStyleElement} The created style element.
 */
const injectStyles = (css: string): HTMLStyleElement => {
  const styleElement = document.createElement("style");
  styleElement.textContent = css;
  document.head.appendChild(styleElement);
  return styleElement;
};

/**
 * Interpolates the template string with values from the item object.
 *
 * @param {string} template - The template string with placeholders like {label} and {value}.
 * @param {TurboSelectData} item - The item object containing label and value.
 * @returns {string} - The interpolated string with the values from item.
 */
const interpolateTemplate = (template: string, item: TurboSelectData): string => {
  if (!item.label && !item.value) return "";
  return template.replace("{label}", item.label).replace("{value}", item.value);
};

interface TurboSelectProps {
  data: string;
  selected: string;
  selectLabel: string;
  searchLabel?: string;
  loadingLabel?: string;
  noResults?: string;
  template?: string;
}

type TurboSelectData = {
  label: string; // Label can be a string or number
  value: string; // Value can be a string or number
  img?: string; // Image URL is optional
};

/**
 * A lightweight, 12kb (gzip) select component with no dependencies, support for icons, seamless search functionality, and full a11y (accessibility) support, designed for an intuitive user experience.
 *
 * @example
 * <TurboSelect
 *   data='[
 *     {"label": "Apple", "value": "apple"},
 *     {"label": "Orange", "value": "orange"},
 *     {"label": "Banana", "value": "banana"}
 *   ]'
 *   selected="orange"
 *   label="Select a fruit"
 *   searchLabel="Search for a fruit..."
 *   noResults="No fruits found."
 *   loadingLabel="Loading fruits...">
 * </TurboSelect>
 *
 * @param {string} data - A JSON string containing the options
 * @param {string} selected - The value of the initially selected option
 * @param {string} [template="{label}"] - The template string used to display the selected option and template for the dropdown list item
 * @param {string} [selectLabel=Select an option] - The label for the select dropdown
 * @param {string} [searchLabel=Search...] - The placeholder text for the search input
 * @param {string} [loadingLabel=Loading...] - The message displayed while options are loading
 * @param {string} [noResults=No results found.] - The message displayed when no search results are found
 */
const TurboSelect = ({
  data,
  selected,
  selectLabel = "Select an option",
  loadingLabel = "Loading...",
  searchLabel = "Search...",
  noResults = "No results found.",
  template = "{label}", // Default template
}: TurboSelectProps) => {
  const [dataList, setDataList] = useState<TurboSelectData[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>(selected);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [mounted, setMounted] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const styleElement = injectStyles(cssText);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prevIndex) =>
          prevIndex === filteredDataList.length - 1 ? 0 : prevIndex + 1
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prevIndex) =>
          prevIndex === 0 ? filteredDataList.length - 1 : prevIndex - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSelect(filteredDataList[highlightedIndex].value);
        }
        break;
      case "Escape":
        handleClose();
        break;
    }
  };

  // Parse the data prop on mount
  useEffect(() => {
    if (data) {
      try {
        const parsedData = JSON.parse(data) as TurboSelectData[];
        setDataList(parsedData);
      } catch (e) {
        console.error("Error parsing data:", e);
      }
    }
  }, [data]);

  // Focus on search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
    return () => {
      if (searchInputRef.current) {
        searchInputRef.current.blur();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 1);
  });

  useEffect(() => {
    if (selected) {
      setSelectedValue(selected);
    }
  }, [selected]);

  // Filter data based on search term
  const filteredDataList = useMemo(
    () => dataList.filter((item) => item.label.toLowerCase().includes(searchTerm.toLowerCase())),
    [dataList, searchTerm]
  );

  const handleClose = () => {
    setIsOpen(false);
    setSearchTerm("");
    setHighlightedIndex(-1);
  };

  const handleSelect = (value: string) => {
    const selectedItem = dataList.find((item) => item.value === value);
    if (selectedItem) {
      setSelectedValue(value);
      handleClose();

      const event = new CustomEvent("select", {
        detail: { value: selectedItem.value, label: selectedItem.label },
        bubbles: true,
        composed: true,
      });
      ref.current?.dispatchEvent(event);
    }
  };

  useClickOutside(ref, handleClose);

  return (
    <Fragment>
      <style>{cssText}</style>
      <div class="turbo-select" ref={ref}>
        {!isOpen ? (
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            class={clsx("button", { "bg-gray-200": !isOpen })}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-labelledby="listbox-label"
            aria-activedescendant={highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined}
            onKeyDown={handleKeyDown}
          >
            {mounted ? (
              <div class="flex items-center">
                {(() => {
                  const selectedItem = dataList.find((item) => item.value === selectedValue);
                  return selectedItem?.img ? (
                    <img class="img" src={selectedItem.img} alt={selectedItem.label} />
                  ) : (
                    <></>
                  );
                })()}
                <span
                  class="title"
                  dangerouslySetInnerHTML={{
                    __html:
                      interpolateTemplate(
                        template,
                        dataList.find((item) => item.value === selectedValue) || {
                          value: "",
                          label: "",
                        }
                      ) || selectLabel,
                  }}
                />
              </div>
            ) : (
              <div role="status">
                <svg
                  aria-hidden="true"
                  key="spinner-icon"
                  class="spinner"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">{loadingLabel}</span>
              </div>
            )}
            <span class="caret">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        ) : (
          <input
            ref={searchInputRef}
            aria-label={searchLabel}
            value={searchTerm}
            onInput={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
            placeholder={searchLabel}
            onKeyDown={handleKeyDown}
            class="input"
            type="search"
          />
        )}
        <StyleTransition
          in={isOpen}
          duration={300}
          styles={{
            enter: { opacity: 0 },
            enterActive: { opacity: 1 },
            exit: { opacity: 1 },
            exitActive: { opacity: 0 },
          }}
        >
          <ul
            class={clsx("listbox")}
            style={{ transition: "opacity 300ms" }}
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
            onKeyDown={handleKeyDown}
          >
            {filteredDataList.length > 0 ? (
              filteredDataList.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(item.value)}
                  role="option"
                  tabIndex={0}
                  id={`option-${index}`}
                  aria-selected={highlightedIndex === index}
                  class={clsx("option", {
                    "option-highlighted": highlightedIndex === index,
                  })}
                >
                  <div class="flex items-center">
                    {item.img && <img class="img" src={item.img} alt={item.label} />}
                    <span
                      class="title"
                      dangerouslySetInnerHTML={{
                        __html: interpolateTemplate(template, {
                          label: item.label,
                          value: item.value,
                        }),
                      }}
                    />
                  </div>
                  {selectedValue === item.value && (
                    <span class="checked">
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </li>
              ))
            ) : (
              <li class="not-found" aria-disabled="true">
                {noResults}
              </li>
            )}
          </ul>
        </StyleTransition>
      </div>
    </Fragment>
  );
};

export default TurboSelect;

register(
  TurboSelect,
  "turbo-select",
  ["data", "selected", "selectLabel", "searchLabel", "loadingLabel", "noResults", "template"],
  { shadow: true }
);
