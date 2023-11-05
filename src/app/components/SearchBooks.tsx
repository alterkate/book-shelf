import React, { useEffect, useState } from 'react';
import Search from 'antd/es/input/Search';
import { Dropdown, Space, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Container, Filters, FiltersLabel } from './Styles';
import { categories, sortBy } from './helper';

const SearchBooks: React.FC = () => {
  const [category, setCategory] = useState(categories[0].label);
  const [sortedBy, setSortedBy] = useState(sortBy[0].label);
  const [searchedBook, setSearchedBook] = useState('');

  useEffect(() => {
    //fetch data
  }, [category, sortedBy, searchedBook]);

  const onSearch = (e) => {
    setSearchedBook(e);
  };

  const handleClickCategories = (e) => {
    const clickedCategory = categories.find(
      (category) => category.key === e.key
    );
    if (clickedCategory) {
      setCategory(clickedCategory.label);
    }
  };

  const handleClickSortBy = (e) => {
    const clickedItem = sortBy.find((category) => category.key === e.key);
    if (clickedItem) {
      setSortedBy(clickedItem.label);
    }
  };

  return (
    <Container>
      <h3>Your Ebook-shelf</h3>
      <Search
        placeholder="Type a book or author's name"
        onSearch={(e) => onSearch(e)}
        enterButton
        style={{ width: '50%' }}
      />
      <Filters>
        <div>
          <FiltersLabel>Categories:</FiltersLabel>
          <Dropdown
            menu={{
              items: categories,
              selectable: true,
              defaultSelectedKeys: ['1'],
              onClick: (e) => handleClickCategories(e),
            }}
          >
            <Typography.Link>
              <Space>
                {category}
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
        </div>
        <div>
          <FiltersLabel>Sort by:</FiltersLabel>
          <Dropdown
            menu={{
              items: sortBy,
              selectable: true,
              defaultSelectedKeys: ['1'],
              onClick: (e) => handleClickSortBy(e),
            }}
          >
            <Typography.Link>
              <Space>
                {sortedBy}
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
        </div>
      </Filters>
    </Container>
  );
};

export default SearchBooks;
